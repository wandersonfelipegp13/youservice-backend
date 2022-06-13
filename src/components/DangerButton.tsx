import {ButtonHTMLAttributes} from 'react'
import '../styles/danger-button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function DangerButton(props: ButtonProps) {
    return (
        <button className="danger-button" {...props}/>
    )
}