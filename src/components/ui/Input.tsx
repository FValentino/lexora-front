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
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} placeholder={placeholder} required={required} />
        </div>
    );
}