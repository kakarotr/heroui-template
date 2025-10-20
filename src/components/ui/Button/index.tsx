import { Button as HeroButton } from '@heroui/button'
import { extendVariants } from '@heroui/system'

export const Button = extendVariants(HeroButton, {
  variants: {
    size: {
      sm: 'h-7 px-2 min-w-0',
      md: 'h-8 px-4 min-w-0',
      lg: 'h-10 px-4 min-w-0'
    },
    isIconOnly: {
      true: 'px-0'
    }
  },
  defaultVariants: {
    size: 'md'
  },
  compoundVariants: [
    { isIconOnly: true, size: 'sm', className: 'w-7' },
    { isIconOnly: true, size: 'md', className: 'w-8' },
    { isIconOnly: true, size: 'lg', className: 'w-10' }
  ]
})