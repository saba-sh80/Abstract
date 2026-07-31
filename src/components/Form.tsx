export const Form = () => {
  return (
    <div
      className="max-w-md mx-auto p-6 bg-white border border-slate-200 rounded-xl shadow-sm"
      id="main-container"
    >
      <p
        className="text-base font-medium text-center text-slate-800"
        id="header-para"
      >
        Sign in to Abstract
      </p>

      <p className="text-center mt-1" id="switch-link-para">
        <a
          className="inline-flex items-center justify-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium no-underline"
          href="#"
          id="switch-link"
        >
          Switch to agent sign-in
          <img
            src="./images/chevron_right.svg"
            alt="chevron-icon"
            id="icon-1"
            className="w-4 h-4"
          />
        </a>
      </p>

      <div id="main-form-container" className="mt-6 flex flex-col gap-4">
        <div id="google-container">
          <a
            href="https://accounts.google.com/o/oauth2/auth/..."
            className="flex items-center justify-center gap-3 w-full py-2.5 px-4 border border-slate-300 rounded-lg bg-white text-slate-700 font-semibold no-underline hover:bg-slate-50 transition-colors shadow-xs"
            id="google-btn"
          >
            <img
              src="./images/auth_google.svg"
              alt="google-icon"
              id="google-icon"
              className="w-5 h-5"
            />
            <span id="signin-text">Sign in with Google</span>
          </a>
        </div>

        <div id="seprator" className="my-2 border-t border-slate-200"></div>
        <div id="form-container" className="flex flex-col gap-4">
          <div className="email-container flex flex-col">
            <label
              htmlFor="exampleFormControlInput1"
              className="text-sm font-semibold text-slate-900 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800"
              id="exampleFormControlInput1"
            />
          </div>

          {/* Password */}
          <div className="email-container flex flex-col">
            <label
              htmlFor="inputPassword5"
              className="text-sm font-semibold text-slate-900 mb-1"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type="password"
                id="inputPassword5"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 pr-10"
                aria-describedby="passwordHelpBlock"
              />
              <span className="absolute right-3 text-slate-400 hover:text-slate-600 cursor-pointer">
                <i className="bi bi-eye-fill"></i>
              </span>
            </div>

            <p className="mt-2 text-right">
              <a className="text-xs font-medium text-blue-600 hover:underline cursor-pointer">
                Forgot password?
              </a>
            </p>

            <button
              type="button"
              className="w-full mt-3 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md shadow-xs transition-colors cursor-pointer"
              id="btn-sign-in2"
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="w-full mt-4 pt-2 border-t border-slate-100" id="links">
          <p className="text-xs text-slate-600 m-0 mt-2">
            Emailed us for support?{" "}
            <a className="text-blue-600 font-medium hover:underline" href="#">
              Get a password
            </a>
          </p>
          <p className="text-xs text-slate-600 m-0 mt-1">
            New to Abstract?{" "}
            <a className="text-blue-600 font-medium hover:underline" href="#">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
