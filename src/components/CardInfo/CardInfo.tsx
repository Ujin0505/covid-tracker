import React, {FC} from 'react';
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import CountUp from "react-countup";

type Props = {
    title: string
    className: string,
    counterValue: number
}

export const CardInfo: FC<Props> = ({title,className,counterValue}) => {
    return <div>
        <Grid item className={className} component={Card}>
            {/*xs={12} m={3} */}
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{title}</Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={counterValue}
                        duration={10}
                        separator=","
                    />
                </Typography>
            </CardContent>
        </Grid>
    </div>
}

