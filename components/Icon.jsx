import Image from 'next/image'
import IconClose from '@/public/icon-close.svg'

export default function Icon({name, size}) {

	switch(name) {
		case 'icon-close':
			return <Image src={IconClose} width={size} height={size} alt={name}/>
			break;
		default:
			return <div>No icon found</div>
	}
}