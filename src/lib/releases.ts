import { siteConfig } from './site';

export type DownloadKind = 'windows' | 'mac-arm' | 'mac-intel' | 'linux' | 'other';

export type DownloadAsset = {
  name: string;
  url: string;
  kind: DownloadKind;
  size?: number;
  checksum?: string;
};

export type ReleaseInfo = {
  version: string;
  publishedAt?: string;
  assets: DownloadAsset[];
  source: 'github' | 'fallback';
};

type GitHubAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type GitHubRelease = {
  tag_name: string;
  published_at: string;
  assets: GitHubAsset[];
};

const fallbackAssets: DownloadAsset[] = [
  {
    name: 'ProctorUz-Setup.exe',
    url: `https://github.com/${siteConfig.releaseRepo}/releases/latest/download/ProctorUz-Setup.exe`,
    kind: 'windows',
    checksum: `https://github.com/${siteConfig.releaseRepo}/releases/latest/download/SHA256SUMS.txt`
  },
  {
    name: 'proctoruz-mac-arm64.dmg',
    url: `https://github.com/${siteConfig.releaseRepo}/releases/latest/download/proctoruz-mac-arm64.dmg`,
    kind: 'mac-arm',
    checksum: `https://github.com/${siteConfig.releaseRepo}/releases/latest/download/SHA256SUMS.txt`
  },
  {
    name: 'proctoruz-mac-x64.dmg',
    url: `https://github.com/${siteConfig.releaseRepo}/releases/latest/download/proctoruz-mac-x64.dmg`,
    kind: 'mac-intel',
    checksum: `https://github.com/${siteConfig.releaseRepo}/releases/latest/download/SHA256SUMS.txt`
  }
];

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${siteConfig.releaseRepo}/releases/latest`,
      {
        next: { revalidate: 900 },
        headers: {
          Accept: 'application/vnd.github+json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub release request failed: ${response.status}`);
    }

    const release = (await response.json()) as GitHubRelease;
    const checksumByBaseName = buildChecksumMap(release.assets);

    return {
      version: release.tag_name,
      publishedAt: release.published_at,
      source: 'github',
      assets: release.assets
        .filter((asset) => !isChecksumAsset(asset.name))
        .map((asset) => ({
          name: asset.name,
          url: asset.browser_download_url,
          size: asset.size,
          kind: detectAssetKind(asset.name),
          checksum: checksumByBaseName.get(asset.name)
        }))
    };
  } catch {
    return {
      version: 'latest',
      source: 'fallback',
      assets: fallbackAssets
    };
  }
}

export function detectAssetKind(name: string): DownloadKind {
  const normalized = name.toLowerCase();

  if (normalized.endsWith('.exe') || normalized.endsWith('.msi') || normalized.includes('win')) {
    return 'windows';
  }

  if (
    normalized.includes('arm64') ||
    normalized.includes('aarch64') ||
    normalized.includes('apple-silicon')
  ) {
    return 'mac-arm';
  }

  if (
    normalized.endsWith('.dmg') ||
    normalized.endsWith('.pkg') ||
    normalized.includes('mac') ||
    normalized.includes('darwin')
  ) {
    return 'mac-intel';
  }

  if (
    normalized.endsWith('.appimage') ||
    normalized.endsWith('.deb') ||
    normalized.endsWith('.rpm') ||
    normalized.includes('linux')
  ) {
    return 'linux';
  }

  return 'other';
}

export function formatBytes(size?: number) {
  if (!size) {
    return '-';
  }

  const units = ['B', 'KB', 'MB', 'GB'];
  let value = size;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function isChecksumAsset(name: string) {
  return /\.(sha256|sha512|sha256sum|sha512sum|txt)$/i.test(name);
}

function buildChecksumMap(assets: GitHubAsset[]) {
  const checksums = new Map<string, string>();

  for (const asset of assets) {
    if (!isChecksumAsset(asset.name)) {
      continue;
    }

    const baseName = asset.name
      .replace(/\.sha256(sum)?$/i, '')
      .replace(/\.sha512(sum)?$/i, '')
      .replace(/\.txt$/i, '');

    checksums.set(baseName, asset.browser_download_url);
  }

  return checksums;
}
