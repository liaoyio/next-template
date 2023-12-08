import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons
} from 'unocss'

import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetUno({ dark: 'media' }),
    presetAttributify({ strict: true }),
    presetIcons({
      autoInstall: true,
      extraProperties: { 'display': 'inline-block', 'vertical-align': 'middle', },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx()
  ],
})
