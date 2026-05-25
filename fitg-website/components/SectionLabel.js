export default function SectionLabel({ children, center = false }) {
    return (
        <div className={`flex items-center gap-2.5 mb-2.5 ${center ? 'justify-center' : ''}`}>
            <div className="w-5 h-px bg-gold" />
            <span className="text-[9px] tracking-[3px] text-gold font-oswald uppercase">{children}</span>
            {center && <div className="w-5 h-px bg-gold" />}
        </div>
    )
}