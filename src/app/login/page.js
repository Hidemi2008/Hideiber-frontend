import LoginForm from "@/components/ui/loginForm";
import InfoSection from "@/components/ui/infoSection";

export default function Login() {
    return (
        <main className="grid grid-cols-2">
            <LoginForm />
            <InfoSection/>
        </main>

    )
}