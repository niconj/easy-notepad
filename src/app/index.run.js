export function runBlock ($log) {
    'ngInject';

    $log.info('Added _includes function to String');

    String.prototype._includes = function(str) {
        var re = new RegExp(str, 'ig');
        return re.test(this);
    }
    
}
