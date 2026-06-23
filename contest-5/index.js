import express from 'express';
import { z } from 'zod';



let app = express();

app.use(express.json());

const db = {
  users: [],
  movies: [
    {
      id:1,
      title:"Inception",
      genre:"Sci-Fi",
      duration:148,
      shows: [
        {
          showId:101,
          time:"10:00 AM",
          pricePerSeat:200,
          availableSeats:50
        },
        {
          showId:102,
          time:"2:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:103,
          time:"6:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    },
    {
      id:2,
      title:"The Dark Knight",
      genre:"Action",
      duration:152,
      shows: [
        {
          showId:201,
          time:"11:00 AM",
          pricePerSeat:200,
          availableSeats:50
        },
        {
          showId:202,
          time:"3:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:203,
          time:"7:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    },
    {
      id:3,
      title:"Interstellar",
      genre:"Sci-Fi",
      duration:169,
      shows: [
        {
          showId:301,
          time:"12:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:302,
          time:"5:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    }
  ]
}



let tokenBlockerMiddleware = (req, res, next) => {
	let token = req.headers['authorization'];
	if (!token) {
		return res.status(401).json({
			success: false, message: 'Unauthorized'
		});
	}
	let user = db.users.find(user => user.token === token);
	if (!user) {
		return res.status(401).json({
			success: false, message: 'Unauthorized'
		});
	}
	if (user.token !== token) {
		return res.status(401).json({
			success: false, message: 'Unauthorized'
		});
	}
	next();
}


const signupSchema = z.object({
	name: z.string().min(3).max(20),
	email: z.email(),
	password: z.string().min(3)
});

const signinSchema = z.object({
	email: z.email(),
	password: z.string().min(3)
});


app.post('/signup', (req, res) => {
	let parsed = signupSchema.safeParse(req.body);

	if (!parsed.success) {
		return res.status(400).json({
			success: false,
			message: JSON.parse(parsed.error)
		});
	}

	let { username, email, password } = parsed.data;

	let hasUser = db.users.find(user => user.email === email);
	if (hasUser) {
		return res.status(400).json({
			success: false,
			message: 'User already exists'
		});
	}

	db.users.push({
		username,
		password,
		email
	});


	return res.status(201).json({
		success: true,
		message: 'User created successfully',
		userId: db.users.length
	});
})


app.post('/signin', (req, res) => {
	let parsed = signinSchema.safeParse(req.body);
	if (!parsed.success) {
		return res.status(400).json({
			success: false,
			message: JSON.parse(parsed.error)
		});
	}

	let { email, password } = parsed.data;
	let user = db.users.find(user => user.email === email && user.password === password);
	if (!user) {
		return res.status(400).json({
			success: false,
			message: 'Invalid email or password'
		});
	}

	let token = crypto.randomUUID();
	user.token = token;

	return res.status(200).json({
		success: true,
		message: 'User signed in successfully',
		token
	})
})


app.get('/movies', (req, res) => {
	let movies = db.movies;
	return res.status(200).json({
		success: true,
		movies
	})
})

app.get('/movies/:id', (req, res) => {
	let movieId = parseInt(req.params.id);
	let movie = db.movies.find(movie => movie.id === movieId);
	if (!movie) {
		return res.status(404).json({
			success: false,
			message: 'Movie not found'
		});
	}
	return res.status(200).json({
		success: true,
		movie
	})
})

app.get('/movies/:id/shows', (req, res) => {
	let movieId = parseInt(req.params.id);
	let movie = db.movies.find(movie => movie.id === movieId);
	if (!movie) {
		return res.status(404).json({
			success: false,
			message: 'Movie not found'
		});
	}
	return res.status(200).json({
		success: true,
		shows: movie.shows
	})
})

app.get('/bookings/:uid', tokenBlockerMiddleware, (req, res) => {
  let userId = parseInt(req.params.uid);
  let user = db.users.find(user => user.id === userId);
  if (!user) {
		  return res.status(404).json({
			 success: false,
			 message: 'User not found'
				    })
  }

  return res.status(200).json({
	 	success: true,
		bookings: user.bookings || []
	})
})

app.get('/bookings/:uid/:bid', tokenBlockerMiddleware, (req, res) => {
  let userId = parseInt(req.params.uid);
	let bookingId = parseInt(req.params.bid);

   let user = db.users.find(user => user.id === userId);
  if (!user) {
	  return res.status(404).json({
		 success: false,
		 message: 'User not found'
	  })
  }

  let booking = user.bookings.find(booking => booking.id === bookingId);
  if (!booking) {
	  return res.status(404).json({
		 success: false,
		 message: 'Booking not found'
	  })
	}
	 
  return res.status(200).json({
	 success: true,
	 booking
  })
})


app.delete('/bookings/:uid/:bid', tokenBlockerMiddleware, (req, res) => {
  let userId = parseInt(req.params.uid);
  let bookingId = parseInt(req.params.bid);
  
	let user = db.users.find(user => user.id === userId);
  if(!user) {
	  return res.status(404).json({
		 success: false,
		 message: 'User not found'
	  })
	}
  if(!user.bookings) {
	  return res.status(404).json({
		 success: false,
		 message: 'No bookings found for this user'
	   })
  }
 let bookings = (user.bookings.find(booking => booking.id === bookingId))
	 if(!bookings) {
		 return res.status(404).json({
			 success: false,
			 message: 'Booking not found'
		 })
	  }

		user.bookings = user.bookings.filter(booking => booking.id !== bookingId);
	 return res.status(200).json({
		 success: true,
		 message: 'Booking deleted successfully'
		   })
})

const bookingSchema = z.object({
  	movieId: z.number().int().positive(),
	showId: z.number().int().positive(),
	seats: z.number().int().positive()
});

app.post('/bookings/:uid', tokenBlockerMiddleware, (req, res) => {
  let userId = parseInt(req.params.uid);
  let parsed = bookingSchema.safeParse(req.body);
  if (!parsed.success) {
	  return res.status(400).json({
		 success: false,
		 message: JSON.parse(parsed.error)
	  })
	}
  let { movieId, showId, seats } = parsed.data;

  let user = db.users.find(user => user.id === userId);
  if (!user) {
	  return res.status(404).json({
		 success: false,
		 message: 'User not found'
	  })
  }
  let show = db.movies.find(movie => movie.id === movieId)?.shows.find(show => show.showId === showId);
  if (!show) {
	  return res.status(404).json({
		 success: false,
		 message: 'Show not found'
	  })
	}
  if(show.availableSeats < seats) {
	  return res.status(400).json({
		 success: false,
		 message: 'Not enough seats available'
	  })
  }

  let bookingId = user.bookings ? user.bookings.length + 1 : 1;
  let booking = {
	  id: bookingId,
	  movieId,
	  showId,
	  seats,
	  totalPrice: seats * show.pricePerSeat
	}

  user.bookings = user.bookings ? [...user.bookings, booking] : [booking];
  show.availableSeats -= seats;

  return res.status(201).json({
	  success: true,
	  message: 'Booking created successfully',
	  booking
  })
})






app.listen(3000, () => {
	console.log('Server is running on port 3000');
})
