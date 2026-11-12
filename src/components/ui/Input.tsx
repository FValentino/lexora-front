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
				className="w-full border rounded-full p-2 text-center"
				id={name} 
				name={name} 
				type={type} 
				placeholder={placeholder} 
				required={required} />
		</div>
	);
}