import { AntdesignIcon, NextjsIcon, UnocssIcon } from '@/components/icon/logo'
import { Button } from 'antd'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center pb-20">
      <div flex="~ col" className="items-center">
        <div flex="~" className="gap-3 pb-4">
          <NextjsIcon className="w-9 h-9" />
          <UnocssIcon className="w-9 h-9" />
          <AntdesignIcon className="w-9 h-9" />
        </div>
        <h1 className="font-semibold text-3xl">Next.js + UnoCSS + Ant Design ✨</h1>
        <a m="y-3" hover="text-[#0AC7B4]" href="https://github.com/liaoyio" target="_blank">
          @liaoyi
          <span
            className="group-hover:-translate-x-1 i-lucide:arrow-up-right"
            inline="block"
            transition="transform"
            motion-reduce="transform-none"
            m="l-1"
          />
        </a>
        <div className="gap-2 flex pt-2">
          <Button>按钮</Button>
          <Button type="primary">Button</Button>
          <Button type="primary"> Create Next App </Button>
        </div>
      </div>
    </main>
  )
}
