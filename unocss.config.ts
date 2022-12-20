import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives, // https://github.com/unocss/unocss/tree/main/packages/transformer-directives
  transformerVariantGroup, // https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    [/^wh-?(.+)$/, ([, c]) => `w-${c} h-${c}`],
    ['s-line', 'shadow  dark:shadow-gray-700 '],
    ['bgc', 'bg-[var(--el-bg-color)]'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.5,
      warn: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
