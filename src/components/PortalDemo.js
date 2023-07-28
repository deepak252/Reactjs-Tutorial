import ReactDOM from 'react-dom';

const portalRoot =document.getElementById("portal-root");
function PortalDemo() {
  return (
    ReactDOM.createPortal(
        <h1>PortalDemo</h1>,
        portalRoot
    )
  )
}

export default PortalDemo