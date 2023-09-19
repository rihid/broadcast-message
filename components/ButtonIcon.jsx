import Icon from "./Icon"

export default function ButtonIcon({icon, size, onClick}) {
	return (
		<button 
			type="button"
			className="
				w-[35px]
				h-[35px]
				rounded-md
				flex
				justify-center
				items-center
				hover:bg-zinc-100
				focus:bg-zinc-100
			"
			onClick={onClick}
		>
			<Icon name={icon} size={size}/>
		</button>
	)
}