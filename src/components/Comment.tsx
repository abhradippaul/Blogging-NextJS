import React from "react";

function Comment() {
  return (
    <div className="flex">
      <img
        className="w-10 h-10 sm:w-20 sm:h-20"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s"
        alt="image"
      />
      <div className="w-full flex justify-center flex-col">
        <div className="flex">
            <h1 className="mx-2">@username</h1>
            <h6 className="mx-2">2 years ago</h6>
        </div>
        <textarea className="m-2 outline-none w-full" rows={4} value="My comment on this postasjk;ddddddddddd;fjjjjjjjjjjjjjjjjjjjjjjLorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores obcaecati praesentium nisi ducimus vitae quod quisquam saepe debitis impedit dignissimos voluptates, dolore accusantium molestias, sunt cupiditate fugit rem dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. At fuga corporis quam optio dicta expedita, quo eius nostrum, dolores voluptatem magnam, aspernatur deleniti consectetur quae labore reiciendis asperiores nihil. Corrupti sunt similique exercitationem nesciunt. Expedita ut dicta odit laborum, illo molestias accusamus impedit veniam sed facilis tempora possimus nostrum eligendi voluptatum quas qui. Ea, porro molestiae vel iusto modi quos adipisci, beatae vero obcaecati est temporibus, quidem provident veritatis tempora dolorem explicabo cupiditate illum animi eius. Autem suscipit, id, facere reiciendis doloremque perferendis voluptate accusantium fuga est distinctio cupiditate esse fugiat vero, ex a obcaecati dignissimos odit necessitatibus eius repellendus."/>
      </div>
    </div>
  );
}

export default Comment;
