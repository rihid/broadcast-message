import Image from 'next/image'
import IconClose from '@/public/icon-close.svg'
import iconSearch from '@/public/icon-search.svg'
import iconSignout from '@/public/icon-sign-out.svg'

export default function Icon({name, size}) {

	switch(name) {
		case 'icon-close':
			return <Image src={IconClose} width={size} height={size} alt={name}/>
			break;
		case 'icon-search':
			return <Image src={iconSearch} width={size} height={size} alt={name}/>
			break;
		case 'icon-sign-out':
			return <Image src={iconSignout} width={size} height={size} alt={name}/>
			break;
		default:
			return <div>No icon found</div>
	}
}