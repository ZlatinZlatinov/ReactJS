export function MyButton({ children, ...props }) {
    return (
        <button
            {...props}
            className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-300 hover:bg-amber-500">
            {children}
        </button>
    );
}