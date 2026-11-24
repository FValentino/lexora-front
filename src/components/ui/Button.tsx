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
			className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-accent shadow-md transition-all duration-200 ease-out hover:bg-accent-dark hover:-translate-y-0.5 active:translate-y-0 hover:cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-mid focus-visible:ring-offset-2"
		>
			{children}
		</button>
	);
}