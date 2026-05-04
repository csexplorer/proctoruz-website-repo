export const siteConfig = {
  name: 'Proctor.uz',
  domain: 'https://proctor.uz',
  supportEmail: 'support@proctor.uz',
  demoEmail: 'sales@proctor.uz',
  demoApiUrl:
    process.env.NEXT_PUBLIC_DEMO_API_URL ?? 'https://elms.proctor.uz',
  releaseRepo:
    process.env.GITHUB_RELEASE_REPO ?? 'proctoruz/proctoruz-secure-exam'
};
