import Image from 'next/image'
import type { FC, ReactElement, ReactNode } from 'react'

export interface StatisticProps {
  title: string
  value: ReactNode | ReactElement
  image: string
}

const Statistic: FC<StatisticProps> = ({ title, value, image }) => {
  return (
    <div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
      <div className="flex-1 flex flex-col">
        <span className="font-light text-zinc-400">{title}</span>
        <span className="text-2xl font-black">{value}</span>
      </div>
      <Image src={image} width={80} height={80} alt="ícone" />
    </div>
  )
}

export { Statistic }
