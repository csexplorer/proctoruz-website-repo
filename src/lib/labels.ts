import type { DownloadKind } from './releases';

export function getPlatformLabel(kind: DownloadKind) {
  switch (kind) {
    case 'windows':
      return 'Windows';
    case 'mac-arm':
      return 'macOS Apple Silicon';
    case 'mac-intel':
      return 'macOS Intel';
    case 'linux':
      return 'Linux';
    default:
      return 'Other';
  }
}
