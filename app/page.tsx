import SignupForm from '@/components/signupForm/SignupForm';
import SwitchThemeButton from '@/components/switchTheme/SwitchThemeButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SwitchThemeButton />
      <SignupForm />
    </main>
  );
}
