import authReducer from '../../reducers/auth'

test('should set user id', () => {
    const uid = 'asdf';
    const state = authReducer({}, { 
        type: 'LOGIN',
        uid
    });
    expect(state.uid).toBe(uid);
});

test('should remove user id', () => {
    const uid = 'asdf';
    const state = authReducer({ uid }, { type: 'LOGOUT' });
    expect(state).toEqual({});
});