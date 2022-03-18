import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  quote: string
  handleClose: () => void
}

export const QuoteModal = ({ isOpen, quote, handleClose }: Props) => {
  let quoteArr = quote.split('\n')
  let header = quoteArr[0]
  let body = quoteArr[1]
  console.log(header)
  console.log(body)
  return (
    <BaseModal title={header} isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {body}
      </p>
    </BaseModal>
  )
}
