export const TOP_MENU_DATA = [
  {
    name: "Home",
    to: "/",
    icon: (
      <svg
        width={15}
        height={14}
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.000912467 10.6123V5.96727C-0.0011615 4.59674 0.638255 3.30422 1.72891 2.47427L4.78791 0.619269C6.14736 -0.206423 7.85347 -0.206423 9.21291 0.619269L12.2729 2.47427C13.3636 3.30422 14.003 4.59674 14.0009 5.96727V10.6123C14.0434 12.4397 12.5973 13.9561 10.7699 14.0003H3.23191C1.40451 13.9561 -0.0415678 12.4397 0.000912467 10.6123ZM4.40128 9.58003C4.73444 9.33391 5.20404 9.40448 5.45016 9.73764C5.81367 10.2297 6.38913 10.5201 7.00091 10.5201C7.61269 10.5201 8.18816 10.2297 8.55166 9.73764C8.79778 9.40448 9.26738 9.33391 9.60055 9.58003C9.93371 9.82615 10.0043 10.2957 9.75816 10.6289C9.11184 11.5038 8.08865 12.0201 7.00091 12.0201C5.91317 12.0201 4.88998 11.5038 4.24366 10.6289C3.99754 10.2957 4.06811 9.82615 4.40128 9.58003Z"
          fill="#DE1EFD"
        />
      </svg>
    ),
  },
  {
    name: "Earn",
    to: "/earn",
    icon: (
      <svg
        width={15}
        height={14}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.000244141" width={44} height={44} rx={16} fill="#DE1EFD" />
        <g clipPath="url(#clip0_51_30462)">
          <mask
            id="mask0_51_30462"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x={10}
            y={10}
            width={24}
            height={24}
          >
            <path
              d="M33.4284 10.5713H10.5713V33.4284H33.4284V10.5713Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_51_30462)">
            <path
              d="M23.9047 12.4753C24.9151 12.4753 25.884 12.8767 26.5984 13.5911C27.313 14.3055 27.7142 15.2745 27.7142 16.2849C27.7142 17.2952 27.313 18.2642 26.5984 18.9786C25.884 19.693 24.9151 20.0944 23.9047 20.0944C22.8944 20.0944 21.9254 19.693 21.211 18.9786C20.4966 18.2642 20.0952 17.2952 20.0952 16.2849C20.0952 15.2745 20.4966 14.3055 21.211 13.5911C21.9254 12.8767 22.8944 12.4753 23.9047 12.4753Z"
              fill="white"
            />
            <path
              d="M15.3335 28.6666C15.3335 28.9192 15.2331 29.1615 15.0545 29.3401C14.8759 29.5187 14.6337 29.6191 14.3811 29.6191H12.4763C12.2237 29.6191 11.9815 29.5187 11.8029 29.3401C11.6243 29.1615 11.5239 28.9192 11.5239 28.6666V20.0952C11.5239 19.8426 11.6243 19.6004 11.8029 19.4218C11.9815 19.2432 12.2237 19.1428 12.4763 19.1428H14.3811C14.6337 19.1428 14.8759 19.2432 15.0545 19.4218C15.2331 19.6004 15.3335 19.8426 15.3335 20.0952V28.6666Z"
              fill="white"
            />
            <path
              d="M19.4571 21.5238H21.5237C22.6604 21.5238 23.7504 21.9753 24.5542 22.7791C25.3579 23.5828 25.8094 24.6728 25.8094 25.8095H19.1418L19.1428 26.7618H26.7619V25.8095C26.7588 24.7961 26.4661 23.8048 25.918 22.9524H28.6666C29.5669 22.9521 30.4487 23.2071 31.21 23.6877C31.9712 24.1682 32.5806 24.8548 32.9676 25.6676C30.7151 28.64 27.0685 30.5714 22.9523 30.5714C20.3228 30.5714 18.0952 30.0095 16.2856 29.0238V20.1628C17.4443 20.3288 18.5385 20.7984 19.4571 21.5238Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_51_30462">
            <rect
              width={24}
              height={24}
              fill="white"
              transform="translate(10 9.99976)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    menu: [
      {
        name: "Farms",
        to: "/earn/farms",
        icon: (
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0011 9.56029H13.001V7.5603C13.001 6.76465 13.3171 6.00159 13.8797 5.43898C14.4423 4.87636 15.2054 4.5603 16.001 4.5603C16.2662 4.5603 16.5206 4.45494 16.7081 4.26741C16.8956 4.07986 17.001 3.82552 17.001 3.56029C17.001 3.29508 16.8956 3.04072 16.7081 2.85319C16.5206 2.66566 16.2662 2.5603 16.001 2.5603C14.9998 2.56237 14.0223 2.86495 13.195 3.42889C12.3677 3.99282 11.7288 4.79212 11.361 5.72329C10.5155 4.62523 9.28142 3.89277 7.91254 3.67645C6.54364 3.46015 5.14388 3.77643 4.00099 4.5603C4.00099 4.5603 5.79398 9.02029 11.061 6.97129C11.0288 7.1662 11.0088 7.36291 11.001 7.5603V9.56029H3.00098C2.73577 9.56029 2.48141 9.66565 2.29388 9.8532C2.10634 10.0407 2.00098 10.2951 2.00098 10.5603V21.5603C2.00098 21.8255 2.10634 22.0799 2.29388 22.2674C2.48141 22.4549 2.73577 22.5602 3.00098 22.5602H21.0011C21.2663 22.5602 21.5205 22.4549 21.7082 22.2674C21.8957 22.0799 22.001 21.8255 22.001 21.5603V10.5603C22.001 10.2951 21.8957 10.0407 21.7082 9.8532C21.5205 9.66565 21.2663 9.56029 21.0011 9.56029ZM4.00099 20.5603V17.5603C4.79663 17.5603 5.5597 17.8763 6.1223 18.439C6.68491 19.0016 7.00099 19.7647 7.00099 20.5603H4.00099ZM4.00099 14.5603V11.5603H7.00099C7.00099 12.3559 6.68491 13.119 6.1223 13.6816C5.5597 14.2442 4.79663 14.5603 4.00099 14.5603ZM12.001 17.5603C11.6054 17.5603 11.2187 17.443 10.8898 17.2232C10.561 17.0035 10.3046 16.6912 10.1532 16.3256C10.0018 15.9602 9.96224 15.5581 10.0394 15.1701C10.1166 14.7822 10.3071 14.4258 10.5868 14.1461C10.8665 13.8664 11.2228 13.6759 11.6108 13.5987C11.9988 13.5216 12.4009 13.5612 12.7664 13.7125C13.1318 13.8639 13.4442 14.1203 13.6639 14.4492C13.8837 14.7781 14.001 15.1647 14.001 15.5603C14.001 16.0907 13.7903 16.5994 13.4152 16.9745C13.0401 17.3495 12.5314 17.5603 12.001 17.5603ZM20.001 20.5603H17.001C17.001 19.7647 17.3171 19.0016 17.8797 18.439C18.4422 17.8763 19.2054 17.5603 20.001 17.5603V20.5603ZM20.001 14.5603C19.2054 14.5603 18.4422 14.2442 17.8797 13.6816C17.3171 13.119 17.001 12.3559 17.001 11.5603H20.001V14.5603Z"
              fill="#DE1EFD"
            />
          </svg>
        ),
      },
      {
        name: "Pools",
        to: "/earn/pools",
        icon: (
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 22.5703C13.8133 22.5703 12.6533 22.2184 11.6666 21.5591C10.6799 20.8998 9.91085 19.9627 9.45672 18.8664C9.0026 17.77 8.88377 16.5636 9.11529 15.3998C9.3468 14.2359 9.91824 13.1668 10.7574 12.3277C11.5965 11.4886 12.6656 10.9171 13.8295 10.6856C14.9933 10.4541 16.1997 10.5729 17.2961 11.027C18.3924 11.4812 19.3295 12.2502 19.9888 13.2369C20.6481 14.2236 21 15.3836 21 16.5703C21 18.1616 20.3679 19.6878 19.2427 20.813C18.1175 21.9382 16.5913 22.5703 15 22.5703ZM8.5 9.42731C11.538 9.42731 14 7.89231 14 5.99931C14 4.10631 11.538 2.57031 8.5 2.57031C5.462 2.57031 3 4.10531 3 5.99931C3 7.89331 5.462 9.42731 8.5 9.42731ZM7.673 13.3703C8.01435 12.5962 8.47607 11.881 9.041 11.2513C8.861 11.2623 8.685 11.2843 8.5 11.2843C5.462 11.2843 3 9.74931 3 7.85631V9.99831C3 11.7153 5.032 13.1193 7.673 13.3703ZM7.139 18.0263C7.04847 17.5462 7.00195 17.0588 7 16.5703C7 16.3303 7.015 16.0934 7.036 15.8583C4.712 15.4592 3 14.1463 3 12.5703V14.7134C3 16.3123 4.762 17.6472 7.139 18.0263ZM8.5 22.5703C8.86069 22.57 9.22104 22.5476 9.579 22.5034C9.33141 22.2708 9.10611 22.0158 8.906 21.7414C8.55157 21.3256 8.24031 20.875 7.977 20.3963C5.188 20.2303 3 18.7814 3 16.9994V19.1412C3 21.0352 5.462 22.5703 8.5 22.5703Z"
              fill="#DE1EFD"
            />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Create",
    to: "/create",
    icon: (
      <svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.439 1.19902L15.2881 0.349854L15.8887 0.95047L15.0396 1.79963L14.439 1.19902Z"
          fill="#DE1EFD"
        />
        <path
          d="M6.30124 4.04764C6.82945 4.04745 7.32731 3.80175 7.64866 3.38277C7.97001 2.96378 8.07827 2.41911 7.94158 1.90911C7.80488 1.39891 7.43861 0.981659 6.95079 0.779561C6.46297 0.577458 5.9088 0.613859 5.45151 0.877766C4.99403 1.14186 4.68558 1.6035 4.61656 2.12715C4.54774 2.65059 4.72615 3.17651 5.09945 3.54999C5.41739 3.86982 5.85021 4.04895 6.30124 4.04764Z"
          fill="#DE1EFD"
        />
        <path
          d="M19.1108 14.7893L22.5083 11.3918L23.1089 11.9925L19.7115 15.3899L19.1108 14.7893Z"
          fill="#DE1EFD"
        />
        <path
          d="M17.4121 16.4875L18.2613 15.6383L18.8619 16.2389L18.0127 17.0881L17.4121 16.4875Z"
          fill="#DE1EFD"
        />
        <path
          d="M13.165 18.1863L14.8638 16.4875L15.4644 17.0882L13.7657 18.7869L13.165 18.1863Z"
          fill="#DE1EFD"
        />
        <path
          d="M2.47754 7.00279L4.60093 4.87939L5.20155 5.48001L3.07816 7.6034L2.47754 7.00279Z"
          fill="#DE1EFD"
        />
        <path
          d="M5.14795 15.9865L5.60922 15.5253L7.98154 17.8976L7.52028 18.3589L5.14795 15.9865Z"
          fill="#DE1EFD"
        />
        <path
          d="M2.14389 17.4748L3.10356 18.1967C3.21049 18.2769 3.27343 18.4028 3.27343 18.5364C3.27343 18.6701 3.21049 18.796 3.10356 18.8762L2.05322 19.6639L2.55808 19.8338H2.55827C2.68036 19.8745 2.77743 19.9686 2.82218 20.0893C2.86673 20.2101 2.85422 20.3447 2.78805 20.4551L2.26441 21.3281L3.50831 20.7059V20.7061C3.61827 20.6513 3.74681 20.6467 3.86037 20.6938C3.97413 20.741 4.06171 20.835 4.10077 20.9516L4.23367 21.3499L5.03279 20.0156C5.10029 19.9036 5.21537 19.8289 5.34505 19.8129C5.47473 19.797 5.6046 19.8418 5.69711 19.9341L6.37073 20.6077L6.64506 18.6856L4.83675 16.8773L2.14389 17.4748Z"
          fill="#DE1EFD"
        />
        <path
          d="M5.33695 14.0521L6.34992 12.589H3.87354L5.33695 14.0521Z"
          fill="#DE1EFD"
        />
        <path
          d="M22.1763 2.52454C18.1864 3.35681 14.4831 5.21593 11.4317 7.91771H12.4691C12.5671 7.91771 12.6621 7.95165 12.738 8.01383L15.7433 10.4732L16.3732 9.84374L16.9736 10.4447L16.0725 11.3455L16.0727 11.3453C15.9182 11.4994 15.6723 11.5116 15.5035 11.3734L12.3184 8.7671H10.5255C9.49792 9.77667 8.56742 10.8804 7.74631 12.0639L5.94824 14.6643L9.26282 17.9768L13.3801 15.0154C17.3505 12.1681 20.3167 8.13605 21.8528 3.49808L22.1763 2.52454ZM10.3702 14.5398L9.76981 13.9394L10.6192 13.09L11.2196 13.6904L10.3702 14.5398ZM12.069 12.8411L11.4685 12.2406L13.1672 10.5419L13.7677 11.1424L12.069 12.8411ZM18.0606 9.12758L17.3684 8.63578C17.51 8.43595 17.6486 8.23328 17.7845 8.02813L18.4937 8.49527C18.3521 8.70856 18.2071 8.91938 18.0584 9.12773L18.0606 9.12758ZM18.9264 7.81108L18.2011 7.36934V7.36971C18.8144 6.36034 19.3439 5.30262 19.7843 4.207L20.572 4.5238C20.114 5.6634 19.5628 6.76343 18.9243 7.81261L18.9264 7.81108Z"
          fill="#DE1EFD"
        />
        <path
          d="M11.3423 20.0576V17.5291L9.87207 18.5874L11.3423 20.0576Z"
          fill="#DE1EFD"
        />
        <path
          d="M6.90144 4.75134C6.88267 4.77201 6.86618 4.79457 6.85253 4.81883L6.84836 4.8158L5.64732 6.61765C5.6094 6.67415 5.58589 6.7388 5.5785 6.80629L5.29487 9.36121L4.80176 9.8564L5.40218 10.4568L6.0026 9.8564H6.00279C6.07124 9.78777 6.11427 9.69791 6.1247 9.6016L6.41344 7.00121L7.15112 5.89457L7.42469 6.44155H7.4245C7.43588 6.4643 7.44915 6.48573 7.46451 6.50601L9.23889 8.8715L11.3993 6.83605L10.202 5.29619L10.6729 5.45336V5.45317C10.7162 5.46758 10.7615 5.47497 10.8072 5.47497C10.8646 5.47497 10.9217 5.46322 10.9744 5.44047L12.9279 4.60344L13.6758 4.85237L13.9447 4.04548L13.0405 3.74782C12.9419 3.71483 12.8346 3.71938 12.7391 3.76053L10.7856 4.59756L9.13824 4.04756L8.23714 3.74725H8.23695C8.08433 3.69663 7.91617 3.73626 7.8026 3.85001L6.90144 4.75134Z"
          fill="#DE1EFD"
        />
        <path
          d="M1.69873 14.364L3.07323 12.9895L3.67385 13.5901L2.29935 14.9646L1.69873 14.364Z"
          fill="#DE1EFD"
        />
        <path
          d="M0 16.0629L0.849163 15.2137L1.44978 15.8144L0.600617 16.6635L0 16.0629Z"
          fill="#DE1EFD"
        />
      </svg>
    ),
    menu: [
      {
        name: "Create Pool",
        to: "/create/pool",
        icon: (
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 22.5603C13.8133 22.5603 12.6533 22.2084 11.6666 21.5491C10.6799 20.8898 9.91085 19.9527 9.45672 18.8564C9.0026 17.76 8.88377 16.5536 9.11529 15.3898C9.3468 14.2259 9.91824 13.1568 10.7574 12.3177C11.5965 11.4785 12.6656 10.9071 13.8295 10.6756C14.9933 10.4441 16.1997 10.5629 17.2961 11.017C18.3924 11.4712 19.3295 12.2402 19.9888 13.2269C20.6481 14.2136 21 15.3736 21 16.5603C21 18.1516 20.3679 19.6778 19.2427 20.803C18.1175 21.9282 16.5913 22.5603 15 22.5603ZM8.5 9.4173C11.538 9.4173 14 7.8823 14 5.9893C14 4.0963 11.538 2.5603 8.5 2.5603C5.462 2.5603 3 4.0953 3 5.9893C3 7.8833 5.462 9.4173 8.5 9.4173ZM7.673 13.3603C8.01435 12.5862 8.47607 11.871 9.041 11.2413C8.861 11.2523 8.685 11.2743 8.5 11.2743C5.462 11.2743 3 9.7393 3 7.8463V9.9883C3 11.7053 5.032 13.1093 7.673 13.3603ZM7.139 18.0163C7.04847 17.5362 7.00195 17.0488 7 16.5603C7 16.3203 7.015 16.0834 7.036 15.8483C4.712 15.4492 3 14.1363 3 12.5603V14.7034C3 16.3023 4.762 17.6372 7.139 18.0163ZM8.5 22.5603C8.86069 22.56 9.22104 22.5376 9.579 22.4934C9.33141 22.2608 9.10611 22.0058 8.906 21.7314C8.55157 21.3156 8.24031 20.865 7.977 20.3863C5.188 20.2203 3 18.7714 3 16.9894V19.1312C3 21.0252 5.462 22.5603 8.5 22.5603Z"
              fill="#DE1EFD"
            />
          </svg>
        ),
      },
      {
        name: "Create Farm",
        to: "/create/farm",
        icon: (
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0011 9.78026H13.001V7.78027C13.001 6.98462 13.3171 6.22156 13.8797 5.65895C14.4423 5.09633 15.2054 4.78027 16.001 4.78027C16.2662 4.78027 16.5206 4.67491 16.7081 4.48738C16.8956 4.29983 17.001 4.04549 17.001 3.78026C17.001 3.51505 16.8956 3.26069 16.7081 3.07316C16.5206 2.88563 16.2662 2.78027 16.001 2.78027C14.9998 2.78234 14.0223 3.08492 13.195 3.64886C12.3677 4.21279 11.7288 5.01209 11.361 5.94326C10.5155 4.8452 9.28142 4.11274 7.91254 3.89642C6.54364 3.68012 5.14388 3.9964 4.00099 4.78027C4.00099 4.78027 5.79398 9.24026 11.061 7.19126C11.0288 7.38617 11.0088 7.58288 11.001 7.78027V9.78026H3.00098C2.73577 9.78026 2.48141 9.88562 2.29388 10.0732C2.10634 10.2607 2.00098 10.5151 2.00098 10.7803V21.7803C2.00098 22.0455 2.10634 22.2999 2.29388 22.4874C2.48141 22.6749 2.73577 22.7802 3.00098 22.7802H21.0011C21.2663 22.7802 21.5205 22.6749 21.7082 22.4874C21.8957 22.2999 22.001 22.0455 22.001 21.7803V10.7803C22.001 10.5151 21.8957 10.2607 21.7082 10.0732C21.5205 9.88562 21.2663 9.78026 21.0011 9.78026ZM4.00099 20.7803V17.7803C4.79663 17.7803 5.5597 18.0963 6.1223 18.659C6.68491 19.2216 7.00099 19.9847 7.00099 20.7803H4.00099ZM4.00099 14.7803V11.7803H7.00099C7.00099 12.5759 6.68491 13.339 6.1223 13.9016C5.5597 14.4642 4.79663 14.7803 4.00099 14.7803ZM12.001 17.7803C11.6054 17.7803 11.2187 17.663 10.8898 17.4432C10.561 17.2235 10.3046 16.9112 10.1532 16.5456C10.0018 16.1802 9.96224 15.7781 10.0394 15.3901C10.1166 15.0021 10.3071 14.6458 10.5868 14.3661C10.8665 14.0864 11.2228 13.8959 11.6108 13.8187C11.9988 13.7415 12.4009 13.7811 12.7664 13.9325C13.1318 14.0839 13.4442 14.3402 13.6639 14.6691C13.8837 14.998 14.001 15.3847 14.001 15.7803C14.001 16.3107 13.7903 16.8194 13.4152 17.1945C13.0401 17.5695 12.5314 17.7803 12.001 17.7803ZM20.001 20.7803H17.001C17.001 19.9847 17.3171 19.2216 17.8797 18.659C18.4422 18.0963 19.2054 17.7803 20.001 17.7803V20.7803ZM20.001 14.7803C19.2054 14.7803 18.4422 14.4642 17.8797 13.9016C17.3171 13.339 17.001 12.5759 17.001 11.7803H20.001V14.7803Z"
              fill="#DE1EFD"
            />
          </svg>
        ),
      },
    ],
  },

  {
    name: "AI Aggregator",
    to: "/ai-aggregator",

    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9826 10.5159L21.3558 9.1427H23V8.22566H20.976L19.6028 9.6013L18.4171 9.60114V7.02419C18.4171 6.42151 17.9285 5.93284 17.3258 5.93284L14.749 5.933V4.74733L16.1246 3.37412L16.1245 1.3501H15.2074V2.99438L13.8342 4.37003V5.93321H12.4586V1.35006H11.5415V5.9328H10.1659V4.36961L8.79269 2.99397L8.79285 1.34985H7.8758V3.37388L9.25145 4.74708V5.93276H6.67433C6.07165 5.93276 5.58299 6.42138 5.58299 7.0241V9.60106H4.39731L3.0241 8.22541H1.00025V9.14245H2.64453L4.02017 10.5157H5.58336V11.8913L1.00021 11.8911V12.8082H5.58294V14.1838H4.01976L2.64411 15.557H1V16.4741H3.02402L4.39723 15.0984H5.5829V17.6754C5.5829 18.2781 6.07153 18.7667 6.67425 18.7667H9.2512V19.9524L7.87555 21.3256V23.3496H8.7926V21.7054L10.1658 20.3297V18.7665H11.5415V23.3497H12.4585V18.7669H13.8341V20.3324L15.2074 21.7056L15.2072 23.3499H16.1242V21.3258L14.7486 19.9526V18.7669H17.3255C17.9282 18.7669 18.4169 18.2783 18.4169 17.6756V15.0988H19.6026L20.9758 16.4745L22.9998 16.4743V15.5573H21.3555L19.9799 14.184H18.4167V12.8084H22.9998V11.8914H18.4171V10.5157L19.9826 10.5159ZM15.2075 15.5573H8.79285L8.79059 9.14258H15.2077L15.2075 15.5573Z"
          fill="#DE1EFD"
        />
      </svg>
    ),
  },
  {
    name: "Product",
    to: "https://app.fortunafi.io/",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M16.8557 18.4717C15.9832 19.9586 14.8225 21.2784 13.4178 22.3498C15.6611 22.011 17.6778 20.9823 19.2453 19.4868C18.5224 19.0755 17.7161 18.7372 16.8556 18.4717H16.8557ZM18.9854 2.34985C19.9899 2.34985 20.804 3.1641 20.804 4.16844C20.804 5.17262 19.9898 5.98703 18.9854 5.98703C17.9809 5.98703 17.1668 5.17279 17.1668 4.16844C17.1668 3.1641 17.9809 2.34985 18.9854 2.34985ZM18.9854 6.49301C20.9099 6.49301 22.47 8.05318 22.47 9.97756L15.5007 9.9774C15.5007 8.05314 17.0607 6.49297 18.9853 6.49297L18.9854 6.49301ZM11.7914 2.34985C12.7959 2.34985 13.61 3.1641 13.61 4.16844C13.61 5.17262 12.7959 5.9872 11.7914 5.9872C10.7869 5.9872 9.97281 5.17295 9.97281 4.16861C9.97281 3.16443 10.7869 2.34985 11.7914 2.34985ZM11.7914 6.49301C13.7158 6.49301 15.276 8.05318 15.276 9.97756L8.30668 9.9774C8.30668 8.05314 9.86685 6.49297 11.7912 6.49297L11.7914 6.49301ZM4.59738 2.34985C5.60189 2.34985 6.41597 3.1641 6.41597 4.16844C6.41597 5.17262 5.60172 5.98703 4.59738 5.98703C3.59287 5.98703 2.77879 5.17279 2.77879 4.16844C2.77895 3.1641 3.5932 2.34985 4.59738 2.34985ZM4.59738 6.49301C6.52181 6.49301 8.08194 8.05318 8.08194 9.97756L1.11307 9.9774C1.11307 8.05314 2.67324 6.49297 4.5975 6.49297L4.59738 6.49301ZM12.158 22.3419V17.7497C13.5172 17.7759 14.8672 17.9484 16.1252 18.267C15.1447 19.8813 13.8003 21.2793 12.158 22.342V22.3419ZM16.4985 17.6079C17.3785 15.9413 17.8875 14.0762 17.9597 12.1305H12.1579V17.0166C13.6446 17.0442 15.1248 17.2417 16.4984 17.608L16.4985 17.6079ZM5.62224 12.1305C5.69439 14.0762 6.20344 15.9414 7.08344 17.6079C8.45747 17.2416 9.93751 17.0441 11.4244 17.0163V12.1307L5.62224 12.1305ZM7.45725 18.267C8.43765 19.8813 9.78202 21.2793 11.4245 22.342L11.4244 17.7498C10.0652 17.7763 8.71508 17.9487 7.45726 18.2671L7.45725 18.267ZM10.1646 22.3499C7.92159 22.0111 5.9046 20.9824 4.33708 19.4869C5.05987 19.0757 5.86627 18.7374 6.72678 18.4718C7.59913 19.9587 8.76007 21.2783 10.1647 22.3499H10.1646ZM6.36685 17.8177C5.44358 18.1128 4.57973 18.4889 3.80871 18.9464C2.1539 17.1316 1.10964 14.7513 1 12.1307H4.89143C4.96183 14.1484 5.47566 16.0832 6.36681 17.8177L6.36685 17.8177ZM18.6909 12.1307H22.5822C22.4725 14.7516 21.4283 17.1316 19.7735 18.9463C19.0023 18.4889 18.1385 18.1128 17.2153 17.8176C18.1065 16.083 18.62 14.1482 18.6909 12.1307V12.1307Z"
          fill="#DE1EFD"
        />
      </svg>
    ),
  },
];

export const BOTTOM_MENU_DATA = [
  {
    name: "Docs",
    icon: (
      <svg
        width="44"
        height="37"
        viewBox="0 0 44 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M24.0909 13.6155C24.4968 13.2409 25.1294 13.2662 25.504 13.6721L28.7348 17.172C29.0884 17.5551 29.0884 18.1455 28.7348 18.5286L25.504 22.0286C25.1294 22.4344 24.4968 22.4598 24.091 22.0852C23.6851 21.7106 23.6598 21.0779 24.0344 20.6721L25.716 18.8503L16 18.8503C15.4477 18.8503 15 18.4026 15 17.8503C15 17.298 15.4477 16.8503 16 16.8503L25.716 16.8503L24.0344 15.0286C23.6598 14.6228 23.6851 13.9902 24.0909 13.6155Z"
          fill="#777E91"
        />
      </svg>
    ),
  },
  {
    name: "Tutorials ",
    icon: (
      <svg
        width="40"
        height="33"
        viewBox="0 0 40 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_51_30584)">
          <path
            d="M14.7393 13.5593C14.6543 13.194 14.6094 12.8132 14.6094 12.422C14.6094 9.66057 16.848 7.422 19.6094 7.422C22.3708 7.422 24.6094 9.66057 24.6094 12.422C24.6094 12.8132 24.5644 13.194 24.4794 13.5593"
            stroke="#777E90"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M17.1547 25.2769L16.4504 24.69C14.8116 23.3243 15.1932 20.7095 17.1541 19.869L17.869 19.5626V12.7769C17.869 11.7907 18.6685 10.9912 19.6547 10.9912C20.6409 10.9912 21.4404 11.7907 21.4404 12.7769V17.459C24.6628 17.459 27.4018 19.4321 27.1547 22.4197C27.0665 23.485 26.7784 24.3665 26.1857 25.2769"
            stroke="#777E90"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_51_30584">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(10 6.35034)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Contacts",
    icon: (
      <svg
        width="40"
        height="33"
        viewBox="0 0 40 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M11.6668 23.8503C12.1271 23.8503 12.5002 23.4772 12.5002 23.017V11.3503C12.5002 10.8901 12.8733 10.517 13.3335 10.517H28.3335C28.7937 10.517 29.1668 10.1439 29.1668 9.68368C29.1668 9.22344 28.7937 8.85034 28.3335 8.85034H13.3335C11.9528 8.85034 10.8335 9.96963 10.8335 11.3503V23.017C10.8335 23.4772 11.2066 23.8503 11.6668 23.8503Z"
          fill="#777E91"
        />
        <path
          d="M26.1522 12.2469C26.0546 12.2064 25.9478 12.184 25.8357 12.1836L25.8332 12.1836L25.8307 12.1836C25.6043 12.1843 25.3992 12.2752 25.2494 12.4223C25.2474 12.4243 25.2453 12.4263 25.2433 12.4283L23.5772 14.0944C23.2518 14.4198 23.2518 14.9475 23.5772 15.2729C23.9027 15.5983 24.4303 15.5983 24.7558 15.2729L24.9906 15.0381C24.8063 18.5552 21.8962 21.3503 18.3332 21.3503H14.9998C14.5396 21.3503 14.1665 21.7234 14.1665 22.1836C14.1665 22.6439 14.5396 23.017 14.9998 23.017H18.3332C22.8222 23.017 26.4822 19.4675 26.6598 15.0221L26.9106 15.2729C27.236 15.5983 27.7637 15.5983 28.0891 15.2729C28.4145 14.9475 28.4145 14.4198 28.0891 14.0944L26.423 12.4283C26.421 12.4263 26.419 12.4243 26.417 12.4223C26.3383 12.3451 26.2482 12.2866 26.1522 12.2469Z"
          fill="#777E91"
        />
      </svg>
    ),
  },
];
