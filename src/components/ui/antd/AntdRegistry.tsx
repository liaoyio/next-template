'use client'

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import type Entity from '@ant-design/cssinjs/es/Cache'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { useServerInsertedHTML } from 'next/navigation'
import React from 'react'
import theme from './themeConfig'

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const isServerInserted = React.useRef<boolean>(false)
  const cache = React.useMemo<Entity>(() => createCache(), [])

  useServerInsertedHTML(() => {
    // 避免 css 重复插入
    if (isServerInserted.current) {
      return
    }
    isServerInserted.current = true
    return <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  })
  return (
    <StyleProvider cache={cache}>
      <ConfigProvider locale={zhCN} theme={theme}>
        {children}
      </ConfigProvider>
    </StyleProvider>
  )
}

export default StyledComponentsRegistry
