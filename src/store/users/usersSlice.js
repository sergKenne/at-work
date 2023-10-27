import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    archiv: [],
    users: [],
    loading: false,
    error: '',
};

export const fetchUsersAsync = createAsyncThunk('users/fetchUsersAsync', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=6');
    return await response.json();
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        editUser: (state, action) => {
            const {
                id,
                inputs: { city, email, name, username, phone, work },
            } = action.payload;
            const user = current(state).users.find((user) => user.id == id);
            const newUser = JSON.parse(JSON.stringify(user)); //Deep Clonning user
            newUser.address.city = city;
            newUser.name = name;
            newUser.username = username;
            newUser.email = email;
            newUser.phone = phone;
            newUser.company.name = work;
            state.users = current(state).users.map((item) => (item.id == id ? newUser : item));
        },
        addToAchiv: (state, action) => {
            const isArchiv = current(state).archiv.find((elt) => elt.id === action.payload.id);
            state.archiv = isArchiv ? state.archiv : [...state.archiv, action.payload];

            state.users = state.users.filter((user) => user.id != action.payload.id);
        },
        removeFromAcrhiv: (state, action) => {
            state.archiv = state.archiv.filter((item) => item.id !== action.payload.id);
            state.users.push(action.payload);
        },
        removeFromList: (state, action) => {
            state.users = state.users.filter((item) => item.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsersAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsersAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { editUser, addToAchiv, removeFromAcrhiv, removeFromList } = usersSlice.actions;
export default usersSlice.reducer;
