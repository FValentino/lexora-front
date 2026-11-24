type InputProps = {
	label: string;
	name: string;
	type?: "text" | "email" | "password";
	placeholder?: string;
	required?: boolean;
};

export default function Input({
	label,
	name,
	type = "text",
	placeholder,
	required,
}: InputProps) {
	return (
		<div className="w-full flex flex-col justify-center items-center my-3">
			<label className="text-lg font-bold" htmlFor={name}>
				{label} 
			</label>
			<input 
				className="w-full rounded-full p-2 border border-slate-300 bg-white text-center text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-primary-mid focus:ring-3 focus:ring-primary-mid/25"
				id={name} 
				name={name} 
				type={type} 
				placeholder={placeholder} 
				required={required} />
		</div>
	);
}