# Installation Steps



## Using npm

Run commands

1) ```npm install```


2) ```npm run dev```


## Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```

You'll need to create a .env.local file
-----------------------------------------
i have implemented login with google using firebase so you need to create a firebase project and enable google authentication.
# Authenitication
GOOGLE_ID = 
GOOGLE_SECRET = 
NEXTAUTH_URL = http://localhost:3000

HOST = http://localhost:3000

# Need to add this to... google cloud
# http://localhost:3000/api/auth/callback/google