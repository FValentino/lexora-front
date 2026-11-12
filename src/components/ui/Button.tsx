type ButtonProps = {
	children: React.ReactNode;
	type?: "button" | "submit";
	disabled?: boolean;
	onClick?: () => void;
};

export default function Button({
	children,
	type = "button",
	disabled = false,
	onClick,
}: ButtonProps) {
	return (
		<button 
			type={type} 
			disabled={disabled} 
			onClick={onClick} 
			className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium text-neutral-100 bg-neutral-900 border border-neutral-800 shadow-md transition-all duration-200 ease-out hover:bg-neutral-800 hover:border-neutral-700 hover:-translate-y-0.5 active:translate-y-0 hover:cursor-pointer"
		>
			{children}
		</button>
	);
}