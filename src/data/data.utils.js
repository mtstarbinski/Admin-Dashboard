import { data } from "./data";

// Total users who made an account
export const totalUsers = data.reduce(
    (total, users) => total + users.newUsers,
    0
);

// Total users who have unsubscribed
export const unsubedUsers = data.reduce(
    (total, users) => total + users.unsubscribedUsers,
    0
);

// Total active users (total accounts - unsubscribed accounts)
export const activeUsers = data.reduce(
    (total, users) => total + users.newUsers - users.unsubscribedUsers,
    0
);

// Most recent yearly gain - first years gain divided by number of years
export const avgGain = Math.round(
    (data[data.length - 1].newUsers - data[0].newUsers) / data.length
);

// Percentage of users who maintain a subscription
export const retentionRate = ((activeUsers / totalUsers) * 100).toFixed(1);

// Projections for nex 5 years
export const Next5Years = () => {
    let next = [];
    let inc = activeUsers;

    for (let x = 0; x < 5; x++) {
        next.push(inc + avgGain);
        inc = next[x];
    }

    return next;
};