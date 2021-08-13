import { Router, Request, Response, NextFunction} from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined}
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if(req.session && req.session.loggedIn) {
    return next(); // This doesnt actually return anthing.
    return; // Not returning anything
  }

  res.status(403);
  res.send("AAAHHHHH AHHHHHH AAHHHHHH.....You didn't say the magic word.");
}

const router = Router();


router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST"> 
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
        <button> Submit </button>
      </div>
    </form>
  
  `);
});


router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password }  = req.body;


  if (email && password && email === "justin" && password === "password") {
    req.session = { loggedIn: true}
    res.redirect('/')
  } else {
    res.send("Invalid email or password");
  }
});



router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div> You are logged in </div>
        <a href="/logout"> Logout </a>
      </div>
    `);
  } else {
    res.send(`
    <div>
      <div> You are not logged in </div>
      <a href="/login"> Login </a>
    </div>
  `);
  }
});


router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});


router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to the good route");
})


export { router };