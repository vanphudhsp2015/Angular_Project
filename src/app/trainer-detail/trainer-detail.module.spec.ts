import { TrainerDetailModule } from './trainer-detail.module';

describe('TrainerDetailModule', () => {
    let trainerDetailModule: TrainerDetailModule;

    beforeEach(() => {
        trainerDetailModule = new TrainerDetailModule();
    });

    it('should create an instance', () => {
        expect(trainerDetailModule).toBeTruthy();
    });
});
