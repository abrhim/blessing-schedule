import { FC } from "react"
import cardStyles from "./Card.css"

export const links = () => [{
    rel: "stylesheet",
    href: cardStyles
}]
export const Card: FC<{}> = ({ children }) => {

    return <div className="card"> {children}</div>
}