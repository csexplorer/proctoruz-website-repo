export const siteConfig = {
  name: 'Proctor.uz',
  domain: 'https://proctor.uz',
  supportEmail: 'support@proctor.uz',
  demoEmail: 'sales@proctor.uz',
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://api.proctor.uz',
  releaseRepo:
    process.env.GITHUB_RELEASE_REPO ?? 'proctor-uz/proctor-user-desktop-app-releases'
};
