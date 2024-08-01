'use client'
const PrintButton: React.FC = () => {
    return (
        <button onClick={()=>{window.print()}}> Print </button>
    );
}
export default PrintButton;