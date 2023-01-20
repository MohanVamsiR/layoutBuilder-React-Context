// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShow = () => {
        onToggleShowContent()
      }

      const onChangeLeft = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRight = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-container">
          <h1 className="config-heading">Layout</h1>
          <div className="checkbox-container">
            <div className="checkbox">
              <input
                type="checkbox"
                id="content"
                onChange={onChangeShow}
                checked={showContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                id="left"
                onChange={onChangeLeft}
                checked={showLeftNavbar}
              />
              <label htmlFor="left" className="label">
                LeftNavbar
              </label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                id="right"
                onChange={onChangeRight}
                checked={showRightNavbar}
              />
              <label htmlFor="right" className="label">
                RightNavbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
