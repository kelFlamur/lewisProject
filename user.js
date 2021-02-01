import Firebase, { db } from '../config/firebase'
// defining types
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const SIGNED_IN = 'SIGNED_IN'
export const SIGNOUT = 'SIGNOUT'
export const UPDATE_FIRST_NAME = 'FIRST_NAME'
export const UPDATE_LAST_NAME = 'LAST_NAME'
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS'
export const DELETE_PROGRESS = 'DELETE_PROGRESS'
export const ADD_BIO = 'ADD_BIO'
// actions

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const updateFirstName = firstname => {
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstname
    }
}

export const updateLastName = lastname => {
    return {
        type: UPDATE_LAST_NAME,
        payload: lastname
    }
}

export const addProgress = day => {
    return async (dispatch, getState) => {
    try {
       const { progress, uid } = getState().user
       progress[day] = true

       const user = db.collection('users').doc(uid)
        await user.update({
            progress: progress
        })
        dispatch({type: UPDATE_PROGRESS, payload: day})
        }
    catch(e) {
        console.log(e)
        alert(e)
    }
  }
}

export const deleteProgress = day => {
    return async (dispatch, getState) => {
    try {
       const { progress, uid } = getState().user
       progress[day] = false

       const user = db.collection('users').doc(uid)
        await user.update({
            progress: progress
        })
        dispatch({type: DELETE_PROGRESS, payload: day})
        }
    catch(e) {
        console.log(e)
        alert(e)
    }
  }
}

export const addBio = bio => {
    return async (dispatch, getState) => {
    try {
        const { uid } = getState().user
        const user = db.collection('users').doc(uid)
        await user.update({
            bio: bio
        })
        dispatch({type: ADD_BIO, payload: bio})
        }
    catch(e) {
        console.log(e)
        alert(e)
    }
  }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
            if (response.user.uid) {
                    const user = await db
				    .collection('users')
				    .doc(response.user.uid)
                    .get()

                    dispatch({ type: LOGIN, payload: user.data() })
                }
        
            dispatch({ type: SIGNED_IN, payload: true })

        } catch (e) {
            console.log(e)
            alert(e)
        }
    }
}

export const getUser = uid => {
	return async (dispatch, getState) => {
		try {
			const user = await db
				.collection('users')
				.doc(uid)
				.get()
            
            dispatch({ type: LOGIN, payload: user.data() })
            dispatch({ type: SIGNED_IN, payload: true })
		} catch (e) {
			console.log(e)
		}
	}
}


export const signup = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password, firstname, lastname } = getState().user
            let progress = new Array(9).fill(false);
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    firstname: firstname,
                    lastname: lastname,
                    bio: "",
                    progress: progress
                }

                db.collection('users').doc(response.user.uid).set(user).then(() => {
                    console.log("Document written with ID: ", response.user.uid);
                  })
                  .catch(function(error) {
                    console.error("Error adding document: ", error);
                  });

                dispatch({ type: SIGNUP, payload: user })
                dispatch({ type: SIGNED_IN, payload: true })

            }
        } catch (e) {
            console.log(e)
        }
    }
}

export const signout = () => {
    return async (dispatch) => {
        dispatch({ type: SIGNED_IN, payload: false })
        dispatch({ type: SIGNOUT, payload: {} })
        await Firebase.auth().signOut();
    }
}