import NotificationIcon from '../../assets/notifications-svgrepo-com.svg'

function Topbar({currentPage}) {
    return(
        <header>
            <h2>{currentPage}</h2>
            <div>
                <input 
                    type="search"
                    placeholder="Search" 
                />

                <button>+</button>

                <button>
                    <img src={NotificationIcon} alt='notificationIcon'/>
                </button>
            </div>
        </header>
    )
}

export default Topbar