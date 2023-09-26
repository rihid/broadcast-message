import { useState } from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default function Signin() {
	const router = useRouter()

	const [form, setForm] = useState({ username: '', password: '' })
	const [isLoading, setIsLoading] = useState(false)

	const handleSignIn = async (e) => {
		e.preventDefault();
		setIsLoading(true)

		const res = await signIn("credentials", {
			username: form.username,
			password: form.password,
			redirect: false
		})

		if (!res.ok) {
			alert(res.error)
			setIsLoading(false)
			return;
		}

		router.replace('/')
	}

	return (
		<div className="relative max-w-full md:max-w-3xl lg:max-w-5xl mx-auto px-[20px]">
			<div className="
				py-[100px] 
				px-[20px] 
				w-full 
				sm:w-[70%] 
				md:w-[60%] 
				lg:w-[40%] 
				mx-auto
			">
				<div className="
					border 
					border-slate-300
					rounded-md
					p-[20px]
					bg-white
				">
					<div className="pb-[20px]">
						<div className="text-[24px] font-[700] mb-[4px]">Sign In</div>
						<div className="text-[14px] text-gray-400">Silahkan masukkan username dan password Anda.</div>
					</div>
					<form onSubmit={handleSignIn}>
						<div className="mb-[20px]">
							<Input
								type="text"
								label="Username *"
								id="username"
								name="username"
								placeholder="dani123"
								value={form.username}
								onChange={(e) => setForm(prev => ({ ...prev, username: e.target.value }))}
							/>
						</div>
						<div className="mb-[20px]">
							<Input
								type="password"
								label="Password *"
								id="password"
								name="password"
								placeholder="******"
								value={form.password}
								onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))}
							/>
						</div>
						<Button
							type="submit"
							label={isLoading ? 'Loading...' : 'Sign In'}
							theme="w-full"
							color="primary"
							disabled={isLoading}
						/>
					</form>
				</div>
			</div>
		</div>
	)
}