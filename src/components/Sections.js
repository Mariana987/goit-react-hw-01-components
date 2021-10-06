import s from './Sections.module.css'

function Sections({ children }) {
    return <div className={s.section}>
        {children}
    </div>

}

export default Sections;