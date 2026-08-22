import './globals.css';

export const metadata = {
  title: 'ひとびと素材｜欲しい素材をリクエスト',
  description: '欲しいイラストをリクエストすると、数分後にみんなのフリー素材として公開される素材サイト。',
};

export default function RootLayout({ children }) {
  return <html lang="ja"><body>{children}</body></html>;
}
