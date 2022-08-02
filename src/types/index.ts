export interface IFormInput {
  type: string
  name: string
  value: { value: string }
  placeholder: string
  onChange: (value: string) => void
}
