export function MyButton({ children, ...props }) {
    return (
        <button
            {...props}
            className="px-4 py-2 w-1/3 font-semibold uppercase rounded text-stone-900 bg-amber-300 hover:bg-amber-500">
            {children}
        </button>
    );
}