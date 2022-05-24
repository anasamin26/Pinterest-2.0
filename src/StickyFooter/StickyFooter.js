import './StickyFooter.css'

const StickyFooter = () => (
    <div class="footer py-3">
        <button class="btn btn-align" style={{backgroundColor:"#f0ecec", fontWeight:"bold", borderRadius:"20px", height:"45px"}}>Reset</button>
        <button type="submit" class="btn mx-1" style={{backgroundColor:"#e80424", color:"white", fontWeight:"bold", borderRadius:"20px", height:"45px"}}>Save</button>
    </div>
)
export default StickyFooter;