import React from 'react'

const OutputContainer = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    return (
        <div className={`bg-zinc-50 w-full border border-zinc-300 rounded-md min-h-20 px-3 py-2 h-auto mb-2 ${className}`}>{children}</div>
    )
}

export default OutputContainer