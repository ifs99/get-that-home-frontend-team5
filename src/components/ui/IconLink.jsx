import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
  color: #616161;
  width: 24px;
  height: 24px;
`

function IconLink({href, target = "", Icon}) {
  return (<StyledLink to={href} target={target} rel="noopener noreferrer">
    {Icon}
  </StyledLink>)
}

export default IconLink
