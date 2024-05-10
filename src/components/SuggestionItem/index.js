// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onChangeSearchInput} = props
  const {id, suggestion} = suggestionItem

  const onSelectItem = () => {
    onChangeSearchInput(id, suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onSelectItem}
      />
    </li>
  )
}

export default SuggestionItem
