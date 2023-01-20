// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-container">
              <h1 className="leftnav-heading">Left Navbar Menu</h1>
              <ul className="unordered">
                <li className="items">Item 1</li>
                <li className="items">Item 2</li>
                <li className="items">Item 3</li>
                <li className="items">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content-container">
              <h1 className="leftnav-heading">Content</h1>
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="left-container">
              <h1 className="leftnav-heading">Right Navbar</h1>
              <div className="box-container">
                <div className="box">Ad 1</div>
                <div className="box">Ad 2</div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
