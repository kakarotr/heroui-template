import { Button as HeroButton } from '@heroui/button'
import { extendVariants } from '@heroui/system'

const Button = extendVariants(HeroButton, {
  variants: {
    size: {
      sm: 'h-7 px-2 min-w-0',
      md: 'h-8 px-4 min-w-0',
      lg: 'h-10 px-4 min-w-0'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export default Button