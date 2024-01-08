import { Children } from 'react'
import Theme from './Theme.js'

const Styles = StyleSheet.create([
    text = {
color: Theme.colors.textPrimary
    },
])

export default function StyledText ({children, color, ...restOfpros}) {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary
    ]

    return (
        <Text style = {textStyles}>
            {Children}
        </Text>
    )
}