import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1666619991~exp=1666620591~hmac=67e454f6a69ae5a8aaf12bf048ccc23199e65eee801dedfc59b920cade4c7990"
                alt="avatar"
              />
              <span>Company Name</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1666619991~exp=1666620591~hmac=67e454f6a69ae5a8aaf12bf048ccc23199e65eee801dedfc59b920cade4c7990"
                alt="avatar"
              />
              <span>New Company</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1666619991~exp=1666620591~hmac=67e454f6a69ae5a8aaf12bf048ccc23199e65eee801dedfc59b920cade4c7990"
                alt="avatar"
              />
              <p>
                <span>Wooper Ltd</span> Changed its cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1666619991~exp=1666620591~hmac=67e454f6a69ae5a8aaf12bf048ccc23199e65eee801dedfc59b920cade4c7990"
                alt="avatar"
              />
              <p>
                <span>Kuti Freelancer</span> Added a new service
              </p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1666619991~exp=1666620591~hmac=67e454f6a69ae5a8aaf12bf048ccc23199e65eee801dedfc59b920cade4c7990"
                alt="avatar"
              />
              <p>
                <span>James Dance</span>Added a new product
              </p>
            </div>
            <span>4 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Customers</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1666619991~exp=1666620591~hmac=67e454f6a69ae5a8aaf12bf048ccc23199e65eee801dedfc59b920cade4c7990"
                alt="avatar"
              />
              <div className="online" />
              <span>James Dance</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1666619991~exp=1666620591~hmac=67e454f6a69ae5a8aaf12bf048ccc23199e65eee801dedfc59b920cade4c7990"
                alt="avatar"
              />
              <div className="online" />
              <span>Kuti Saikz</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1666619991~exp=1666620591~hmac=67e454f6a69ae5a8aaf12bf048ccc23199e65eee801dedfc59b920cade4c7990"
                alt="avatar"
              />
              <div className="online" />
              <span>Tom Wanker</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1666619991~exp=1666620591~hmac=67e454f6a69ae5a8aaf12bf048ccc23199e65eee801dedfc59b920cade4c7990"
                alt="avatar"
              />
              <div className="online" />
              <span>Jane Charles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
